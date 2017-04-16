package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type MainController struct {
	beego.Controller
}
type MainController2 struct {
	beego.Controller
}
type MainController3 struct {
	beego.Controller
}
func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

func (c *MainController2) Get() {
	c.Data["Website"] = "alexwang2.me"
	c.Data["Email"] = "alexwang2@gmail.com"
	c.TplName = "page1.tpl"
}
func (c *MainController2) Post() {
	c.Data["Website"] = "alexwang3.me"
	fmt.Printf("%s\n", c.GetString("object"))
	c.Data["Email"] = c.GetString("object")
	c.TplName = "page1.tpl"
}
