package server

import (
	handlers "go-clean/internal/handler"

	"github.com/gin-gonic/gin"
)

func SetupRouter(router *gin.Engine, handler *handlers.Handler) {
	router.GET("/User/:id", handler.GetUserByID)
}
