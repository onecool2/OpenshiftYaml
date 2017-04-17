package main

import (
	//_ "github.com/my-web-ap/routers"
	_ "my-web-ap/routers"
	"github.com/astaxie/beego"
)

func main() {
//	beego.Get("/alice", func(ctx *context.Context){
//		ctx.Output.Body([]byte("bob"))})

	beego.Run()
}

