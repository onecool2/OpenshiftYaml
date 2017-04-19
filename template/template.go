package template
//package main

import (
    "fmt"
    "log"

      "github.com/astaxie/beego"
      "gopkg.in/yaml.v2"
)
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
/*
func main() {
    Template= new (ST_Template)
    s1:= Service{Kind:"Service"}
    s2:= Service{Kind:"Service"}
    r1:= Route{Kind:"Route"}
    r2:= Route{Kind:"Route"}

    Template.ApiVersion = "this is Blog"
    Template.Objects = append(Template.Objects, s1)
    Template.Objects = append(Template.Objects, s2)
    Template.Objects = append(Template.Objects, r1)
    Template.Objects = append(Template.Objects, r2)

    d, err := yaml.Marshal(&Template)
    if err != nil {
        log.Fatalf("error: %v", err)
    }
    fmt.Printf("--- t dump:\n%s\n\n", string(d))

}
*/
