const todoController = require('./todo');

describe('todo Controller', () => {



  it('should return todos when calling getTodos', () => {
    const resMock = {
      send: jest.fn()
    };
    todoController.getTodos(null, resMock);
    expect(resMock.send).toHaveBeenCalled();
    expect(resMock.send.mock.calls[0][0][0].id).toEqual(1);
  });


  it('should not update todo if not found', () => {

    const reqMock = {
      params: {
        id: 5
      },
      body: {
        description: 'test',
        done: true
      }
    }

    const sendSpy = jest.fn();
    const statusSpy = jest.fn().mockReturnValue({
      send: sendSpy
    });
    const resMock = {
      status: statusSpy
    }

    todoController.updateTodo(reqMock, resMock);
    expect(statusSpy).toHaveBeenCalled();
    expect(statusSpy).toHaveBeenCalledWith(404);
    expect(sendSpy).toHaveBeenCalled();
  });

  it('should update todo', () => {
    const reqMock = {
      params: {
        id: 1
      },
      body: {
        description: 'test',
        done: true
      }
    }

    const sendSpy = jest.fn();
    const resMock = {
      send: sendSpy
    }

    todoController.updateTodo(reqMock, resMock);
    expect(sendSpy).toHaveBeenCalled();
  });




});