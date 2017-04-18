package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type deployment struct {
        apiVersion string
        kind string
        name string
        describtion string
        iconClass string
        tags string
}

var deploymentSlice []deployment
 
type MainController struct {
	beego.Controller
}
/*
type MainController2 struct {
	beego.Controller
}
type MainController3 struct {
	beego.Controller
}*/
func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "tabs.tpl"
	//c.TplName = "index.tpl"
}

func (c *MainController) Post() {
	c.Data["Website"] = "alexwang3.me"
	fmt.Printf("%s\n", c.GetString("apiVersion"))
	c.Data["Email"] = c.GetString("object")
        submit_type := c.GetString("tabType")
	fmt.Printf("%s\n", submit_type)
        
        switch submit_type {
	    case "deployment":
                apiVersion := c.GetString("apiVersion")
		kind := c.GetString("kind")
                name := c.GetString("name")
                describtion := c.GetString("describtion")
                iconClass := c.GetString("iconClass")
                tags := c.GetString("tags")
                newDeployment := deployment{apiVersion, kind, name, describtion, iconClass, tags}
                deploymentSlice = append(deploymentSlice, newDeployment)

	}
	c.TplName = "tabs.tpl"
}
