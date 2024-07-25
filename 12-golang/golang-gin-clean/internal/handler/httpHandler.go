package handlers

import (
	usecases "go-clean/internal/usecase"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v4/pgxpool"
)

type Handler struct {
	Usecase usecases.Usecase
}

func NewHandler(db *pgxpool.Pool) *Handler {
	return &Handler{
		Usecase: usecases.NewUsecase(db),
	}
}

func (h *Handler) GetUserByID(c *gin.Context) {
	id := c.Param("id")
	User, err := h.Usecase.GetUserByID(id)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, User)
}
