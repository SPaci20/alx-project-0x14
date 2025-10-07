# MoviesDatabase API Documentation

## API Overview

The MoviesDatabase API is a comprehensive RESTful service that provides access to an extensive collection of movie and TV series data. This API allows developers to retrieve detailed information about movies, TV shows, actors, and related metadata. Key features include searching through vast entertainment content, accessing detailed information about titles, retrieving cast and crew information, and getting high-quality images and posters. The API serves as a valuable resource for building movie applications, entertainment platforms, and content discovery services.

## Version

The current version of the MoviesDatabase API is **1.0**

## Available Endpoints

### Titles Endpoints
- **GET /titles** - Retrieve a list of movies and TV series with filtering and pagination
- **GET /titles/{id}** - Get detailed information about a specific title
- **GET /titles/search/{title}** - Search for titles by name
- **GET /titles/random** - Get random titles from the database

### Images Endpoints
- **GET /titles/images/{id}** - Retrieve images associated with a specific title
- **GET /images/{id}** - Get detailed information about a specific image

### Actors Endpoints
- **GET /actors** - Retrieve a list of actors with pagination
- **GET /actors/{id}** - Get detailed information about a specific actor
- **GET /actors/search/{name}** - Search for actors by name

### Miscellaneous Endpoints
- **GET /genres** - Get list of available genres
- **GET /countries** - Get list of available countries
- **GET /languages** - Get list of available languages

## Request and Response Format

### Request Format
All requests must include the API key in the headers and follow RESTful principles:

```http
GET /titles?page=1&limit=10&genre=action
Headers:
  "X-RapidAPI-Key": "your-api-key"
  "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"