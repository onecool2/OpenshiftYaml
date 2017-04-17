package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type deployment struct {
        deployment map[string] string
}
 
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
	c.TplName = "tabs.tpl"
}
