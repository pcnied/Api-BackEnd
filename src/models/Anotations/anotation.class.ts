import { v4 as uuid } from "uuid";

export class Anotation {
  private _userId: string;
  private _id: string;
  private _title: string;
  private _value: string;
  private _date: string;

  constructor(userId: string, title: string, value: string, date: string) {
    this._userId = userId;
    this._id = uuid();
    this._title = title;
    this._value = value;
    this._date = date;
  }

  get userId(): string {
    return this._userId;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get value(): string {
    return this._value;
  }

  get date(): string {
    return this._date;
  }

  set userId(userId: string) {
    this._userId = userId;
  }

  set id(id: string) {
    this._id = id;
  }

  set title(title: string) {
    this._title = title;
  }

  set value(value: string) {
    this._value = value;
  }

  set date(date: string) {
    this._date = date;
  }
}
