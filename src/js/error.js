export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [101, 'Переменной нету'],
      [202, 'Имя забыли'],
      [303, 'Просто ошибка'],
      [666, 'Совсем плохо все....'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Неизвестная ошибка';
  }
}
