package config

import (
	"github.com/spf13/viper"
)

type Config struct {
	ServerAddress string
	DatabaseURL   string
}

func LoadConfig() *Config {
	viper.SetConfigFile("../.env")
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}

	return &Config{
		ServerAddress: viper.GetString("SERVER_ADDRESS"),
		DatabaseURL:   viper.GetString("DATABASE_URL"),
	}
}
