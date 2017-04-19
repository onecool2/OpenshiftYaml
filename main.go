package main

import (
	//_ "github.com/K8sYamlUI/routers"
	_ "K8sYamlUI/routers"
	"github.com/astaxie/beego"
)

func main() {
//	beego.Get("/alice", func(ctx *context.Context){
//		ctx.Output.Body([]byte("bob"))})

	beego.Run()
}

