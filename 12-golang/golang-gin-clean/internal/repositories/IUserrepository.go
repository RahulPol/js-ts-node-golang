package repositories

import models "go-clean/internal/models"

type UserRepository interface {
	GetUserByID(id string) (*models.User, error)
}
