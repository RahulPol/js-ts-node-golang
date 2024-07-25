package repositories

// import (
// 	"context"
// 	"go-clean/internal/models"
// 	"go-clean/internal/repositories"
// 	"testing"

// 	"github.com/jackc/pgx/v4"
// 	"github.com/pashagolub/pgxmock"
// 	"github.com/stretchr/testify/assert"
// 	"github.com/stretchr/testify/mock"
// )

// type MockPgxPool struct {
// 	mock.Mock
// }

// func (m *MockPgxPool) QueryRow(ctx context.Context, sql string, args ...interface{}) pgx.Row {
// 	return nil
// }

// func TestRepository_GetUserById(t *testing.T) {
// 	mockPool, err := pgxmoc
// 	assert.NoError(t, err)
// 	defer mockPool.Close()

// 	repo := repositories.NewRepository(mockPool)

// 	t.Run("success", func(t *testing.T) {
// 		rows := pgxmock.NewRows([]string{"id", "name"}).AddRow(123, "John Doe")

// 		mockPool.ExpectQuery("SELECT id, name FROM users WHERE id=\\$1").
// 			WithArgs("123").
// 			WillReturnRows(rows)

// 		user, err := repo.GetUserByID("123")
// 		assert.NoError(t, err)
// 		assert.Equal(t, &models.User{ID: 123, Name: "John Doe"}, user)
// 		assert.NoError(t, mockPool.ExpectationsWereMet())
// 	})

// }
