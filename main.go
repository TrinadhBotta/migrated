package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()

	r.GET("/generate", func(c *gin.Context) {
		inputs := loadInputs()
		prompt := buildPrompt(inputs)
		c.JSON(http.StatusOK, gin.H{"prompt": prompt})
	})

	r.Run()
}
