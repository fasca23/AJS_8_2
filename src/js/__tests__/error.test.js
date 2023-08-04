import ErrorRepository from '../error';

test.each([
  [101, 'Переменной нету'],
  [202, 'Имя забыли'],
  [303, 'Просто ошибка'],
  [666, 'Совсем плохо все....'],
  [404, 'Неизвестная ошибка'],
])('Проверяем работу с ошибками', (code, description) => {
  expect(new ErrorRepository().translate(code)).toBe(description);
});
