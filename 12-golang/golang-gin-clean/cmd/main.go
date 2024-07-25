package main

import (
	"go-clean/config"
	"go-clean/database"
	handlers "go-clean/internal/handler"
	"go-clean/server"

	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.LoadConfig()

	db, err := database.NewPGXConnection(cfg.DatabaseURL)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	router := gin.Default()
	server.SetupRouter(router, handlers.NewHandler(db))

	router.Run(cfg.ServerAddress)
}
