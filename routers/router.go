package routers

import (
	"K8sYamlUI/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/k8s", &controllers.MainController{})
    beego.Router("/page1", &controllers.MainController2{})
//    beego.Router("/page2", &controllers.MainController3{})
}
