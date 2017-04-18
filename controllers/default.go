package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type template struct {
        apiVersion string
        kind string
        name string
        describtion string
        iconClass string
        tags string
}

var templateSlice []template
 
type MainController struct {
	beego.Controller
}
/*
type MainController2 struct {
	beego.Controller
}
*/
type MainController2 struct {
	beego.Controller
}
func (c *MainController2) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "page1.tpl"
	//c.TplName = "index.tpl"
}
func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "tabs.tpl"
	//c.TplName = "index.tpl"
}
func processDeployment(c *MainController) {
        apiVersion := c.GetString("apiVersion")
	kind := c.GetString("kind")
        name := c.GetString("name")
        describtion := c.GetString("describtion")
        iconClass := c.GetString("iconClass")
        tags := c.GetString("tags")
        newDeployment := template{apiVersion, kind, name, describtion, iconClass, tags}
        templateSlice = append(templateSlice, newDeployment)
}

func processService(c *MainController) {

}
func processRoute(c *MainController) {

}
func processPOD(c *MainController) {

}
func processPV(c *MainController) {

}
func processPVC(c *MainController) {

}

func (c *MainController) Post() {
	c.Data["Website"] = "alexwang3.me"
	fmt.Printf("%s\n", c.GetString("apiVersion"))
	c.Data["Email"] = c.GetString("object")
        submit_type := c.GetString("tabType")
	fmt.Printf("%s\n", submit_type)
        
        switch submit_type {
	    case "template":
                processDeployment(c)
            case "POD":
		processPOD(c)
            case "service":
                processService(c)
            case "route":
                processRoute(c)
            case "PV":
                processPV(c)
            case "PVC":
                processPVC(c)

	}
	c.TplName = "tabs.tpl"
}
