Feature: Todos
  As an user I want to handle my todo tasks

  Scenario: GET All todos
    Given get all endpoint is requested
    Then it should return 2 todos