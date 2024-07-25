package handler

import (
	"encoding/json"
	"errors"
	handlers "go-clean/internal/handler"
	models "go-clean/internal/models"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockUsecase struct {
	mock.Mock
}

func (m *MockUsecase) GetUserByID(id string) (*models.User, error) {

	args := m.Called(id)
	return args.Get(0).(*models.User), args.Error(1)
}

func TestHandler_GetUserByID(t *testing.T) {

	t.Run("TestHandler_GetUserByID_Success", func(t *testing.T) {

		mockUser := &models.User{
			ID:   1,
			Name: "Nirmal",
		}
		mockUsecase := new(MockUsecase)
		mockUsecase.On("GetUserByID", "1").Return(mockUser, nil)

		handler := handlers.NewHandler(nil)
		handler.Usecase = mockUsecase

		// create a mock gin context
		gin.SetMode(gin.TestMode)
		resp := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(resp)

		c.Params = append(c.Params, gin.Param{Key: "id", Value: "1"})

		handler.GetUserByID(c)

		assert.Equal(t, http.StatusOK, resp.Code)

		response := models.User{ID: 1,
			Name: "Nirmal"}

		assert.Equal(t, mockUser.ID, response.ID)
		assert.Equal(t, mockUser.Name, response.Name)

	})

	t.Run("TestHandler_GetUserByID_Error", func(t *testing.T) {

		mockUsecase := new(MockUsecase)
		mockUsecase.On("GetUserByID", "1").Return(&models.User{
			ID:   0,
			Name: "",
		}, errors.New("user not found"))

		handler := handlers.NewHandler(nil)
		handler.Usecase = mockUsecase

		// create a mock gin context
		gin.SetMode(gin.TestMode)
		resp := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(resp)

		c.Params = append(c.Params, gin.Param{Key: "id", Value: "1"})

		handler.GetUserByID(c)

		assert.Equal(t, http.StatusInternalServerError, resp.Code)

		var responseBody map[string]string
		err := json.Unmarshal(resp.Body.Bytes(), &responseBody)
		assert.NoError(t, err)
		assert.Contains(t, responseBody["error"], "user not found")
	})

}
