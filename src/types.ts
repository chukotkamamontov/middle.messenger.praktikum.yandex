import Block from './tools/block';

// pages types

export type NotFoundPageProps = {
  message: string;
  statusCode: string;
}

export type ErrorPageProps = {
  message: string;
  statusCode: string;
}

// blocks types

export type LeftPanelProps = {
  className?: string;
  data: string;
}

export type LentaProps = {
  className?: string;
  data: string;
}

export type MessageProps = {
  className?: string;
  data: string;
}

export type FormProps = {
  className?: string;
  inputs?: Block[];
  link?: Block;
  submitButton: Block;
}

export type LoginFormProps = {
  className?: string;
  inputs: Block[];
  link: Block;
  submitButton: Block;
}

export type RegistrationFormProps = {
  className?: string;
  inputs: Block[];
  link: Block;
  submitButton: Block;
}

// components types

export type ButtonProps = {
  type: 'button' | 'submit';
  text: string;
  events?: {
    click: () => void;
  };
}

export type InputProps = {
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
  id: string;
  outlined?: boolean;
  name: string;
  placeholder?: string;
  label?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
}

export type TextareaProps = {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  events?: {
    blur?: (event: FocusEvent) => void;
  };
}

export type InputBlockProps = {
  className?: string;
  id: string;
  outlined?: boolean;
  label: string;
  name: string;
  type: 'text' | 'password' | 'tel' | 'email' | 'file';
}

export type TextareaBlockProps = {
  className?: string;
  id: string;
  outlined?: boolean;
  label?: string;
  name: string;
}

export interface LinkProps {
  content?: Block;
  events?: {
    click: (event: Event) => void;
  };
  text?: string;
  to: string;
}

export type ErrorProps = {
  text: string;
}

export interface SignUpData {
  email: string;
  first_name: string;
  login: string;
  password: string;
  phone: string;
  second_name: string;
}

export interface SignInData {
  login: string;
  password: string;
}

export interface UserInfo {
  avatar: string;
  display_name: string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
}

export interface ProfileData {
  display_name: string;
  email: string;
  first_name: string;
  login: string;
  phone: string;
  second_name: string;
  avatar?: string;
  id?: string;
}

export interface PasswordData {
  newPassword: string;
  oldPassword: string;
}

export enum Routes {
  Home = '/',
  Login = '/login',
  Register = '/sign-up',
  Messenger = '/messenger',
  Profile = '/profile',
  Settings = '/settings',
  NotFound = '/404',
  Error = '/500',
}

export interface MessageData {
  chat_id: number;
  content: string;
  file?: {
    content_size: number;
    content_type: string;
    filename: string;
    id: number;
    path: string;
    upload_date: string;
    user_id: number;
  };
  time: string;
  type: string;
  user_id: string;
}

export interface LastMessage {
  content: string;
  time: string;
  user: {
    avatar: string;
    email: string;
    first_name: string;
    login: string;
    phone: string;
    second_name: string;
  };
}

export interface Chat {
  avatar: string;
  created_by: number;
  id: number;
  last_message: LastMessage;
  title: string;
  unread_count: number;
}

export interface ChatMember extends Omit<UserInfo, 'phone' | 'email'> {
  role?: string;
}
