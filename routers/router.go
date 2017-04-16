package routers

import (
	"github.com/my-web-ap/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("/page1", &controllers.MainController2{})
    beego.Router("/page2", &controllers.MainController3{})
}
