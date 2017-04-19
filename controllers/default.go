package controllers

import (
//	"K8sYamlUI/template"
	"github.com/astaxie/beego"
	"gopkg.in/yaml.v2"
	"fmt"
       "log"
)

/******************************************** should move to template/template.go ***************************/ 
type MainController struct {
	beego.Controller
}













type Service struct {
        Kind string `yaml:"kind"`
  	ApiVersion string `yaml:"apiVersion"`
	Metadata struct {
		Name string `yaml:"name"`
	    	Annotations struct {
			Description string `yaml:"description"`
		}
	}
  	Spec struct {
    		ports struct {
    			Name string `yaml:"name"`
	      		Port string `yaml:"port"`
      			TargetPort string `yaml:"targetPort"`
		}
	}
    	Selector struct {
      		Name string `yaml:"name"`
	}

}

type Template struct {
        ApiVersion string `yaml:"apiVersion"`
        Kind string `yaml:"kind"`
        Name string `yaml:"name"`
        Describtion string `yaml:"describtion"`
        IconClass string `yaml:"iconClass"`
        Tags string `yaml:"tags"`
        Objects []interface{} `yaml:"Objects"`	
}

type Route struct {
	Kind string `yaml:"kind"`
		ApiVersion string `yaml:"apiVersion"`
		Metadata struct {
			Name string `yaml:"name"`
		}
	Spec struct {
		Host string `yaml:"host"`
			Path string `yaml:"path"`
			To struct {
				Kind string `yaml:"kind"`
					Name string `yaml:"name"`
			}
		Port struct {
			TargetPort string `yaml:"targetPort"`
		}
		Tls struct {
			Termination string `yaml:"termination"`
		}
	}
}

func (this *Template) Save (c *MainController) int {
        this.ApiVersion = c.GetString("apiVersion")
	this.Kind = c.GetString("kind")
        this.Name = c.GetString("name")
        this.Describtion = c.GetString("describtion")
        this.IconClass = c.GetString("iconClass")
        this.Tags = c.GetString("tags")
	d, err := yaml.Marshal(this)
    	if err != nil {
        	log.Fatalf("error: %v", err)
    	}
    	fmt.Printf("--- t dump:\n%s\n\n", string(d))
	return 0


}

func (Service *Service) Save(c *MainController) {
    /*d, err := yaml.Marshal(&Template)
    if err != nil {
        log.Fatalf("error: %v", err)
    }
    fmt.Printf("--- t dump:\n%s\n\n", string(d))*/
}

func (this *Template) Write() {

}

func (Service *Service) Write() {

}


/******************************************** should move to template/template.go ***************************/ 


type MainController2 struct {
	beego.Controller
}
func (c *MainController2) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "wangxiaoxuan@tuscloud.io"
	c.TplName = "page1.tpl"
	//c.TplName = "index.tpl"
}
func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "k8s.tpl"
	//c.TplName = "index.tpl"
}

var templatec Template
func processTemplate() {
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
                templatec.Save(c)
                templatec.Write()
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
	c.TplName = "k8s.tpl"
}
