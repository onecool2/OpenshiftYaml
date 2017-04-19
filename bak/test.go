package main

import (
    "fmt"
    "log"
//    "my-web-ap/template"
    "gopkg.in/yaml.v2"
)

var data = `
blog: xiaorui.cc
best_authors: ["fengyun","lee","park"]
desc:
  counter: 521
  plist: [3, 4]
`
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


type T struct {
    Blog    string
    Authors []string `yaml:"best_authors,flow"`
    Desc    struct {
        Counter int   `yaml:"Counter"`
        Plist   []int `yaml:",flow"`
    }
}

func main() {
    //t := T{}
    t:= Template{}
    s1:= Service{Kind:"Service"}
    s2:= Service{Kind:"Service"}
    //t.Objects.kind = s 
   // t.Objects.D[0] = 123

    //把yaml形式的字符串解析成struct类型
    //err := yaml.Unmarshal([]byte(data), &t)
    //修改struct里面的记录
    t.ApiVersion = "this is Blog"
    //t.s.ApiVersion = "this is Blog"
    //t.Objects.kind=s
    t.Objects = append(t.Objects, s1)
    t.Objects = append(t.Objects, s2)
    //t.Desc.Counter = 99
    fmt.Printf("--- t:\n%v\n\n", t)
    //转换成yaml字符串类型
    d, err := yaml.Marshal(&t)
    if err != nil {
        log.Fatalf("error: %v", err)
    }
    fmt.Printf("--- t dump:\n%s\n\n", string(d))
}
