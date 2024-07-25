package usecases

import "go-clean/internal/models"

type Usecase interface {
	GetUserByID(id string) (*models.User, error)
}
