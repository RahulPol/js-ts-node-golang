package repositories

import (
	"context"
	models "go-clean/internal/models"

	"github.com/jackc/pgx/v4/pgxpool"
)

type PGXRepository struct {
	db *pgxpool.Pool
}

func NewRepository(db *pgxpool.Pool) UserRepository {
	return &PGXRepository{db: db}
}

func (r *PGXRepository) GetUserByID(id string) (*models.User, error) {
	var User models.User
	rows := r.db.QueryRow(context.Background(), "SELECT id, name FROM users WHERE id=$1", id)
	//.Scan(&User.ID, &User.Name)

	err := rows.Scan(&User.ID, &User.Name)
	if err != nil {
		return nil, err
	}
	return &User, nil
}
