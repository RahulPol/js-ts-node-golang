package usecases

import (
	models "go-clean/internal/models"
	"go-clean/internal/repositories"

	"github.com/jackc/pgx/v4/pgxpool"
)

type UsecaseImpl struct {
	repo repositories.UserRepository
}

func NewUsecase(db *pgxpool.Pool) Usecase {
	return &UsecaseImpl{
		repo: repositories.NewRepository(db),
	}
}

func (u *UsecaseImpl) GetUserByID(id string) (*models.User, error) {
	return u.repo.GetUserByID(id)
}
