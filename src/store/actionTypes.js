export const SHOW_CREATE_PLAYLIST_MODAL = 'SHOW_CREATE_PLAYLIST_MODAL';
export const HIDE_CREATE_PLAYLIST_MODAL = 'HIDE_CREATE_PLAYLIST_MODAL';

export const REORDER_PLAYLIST = 'REORDER_PLAYLIST';
export const REORDER_PLAYLISTS = 'REORDER_PLAYLISTS';

export const SHOW_CREATE_RESOURCE_MODAL = 'SHOW_CREATE_RESOURCE_MODAL';
export const HIDE_CREATE_RESOURCE_MODAL = 'HIDE_CREATE_RESOURCE_MODAL';

export const SHOW_RESOURCE_SELECT_ACTIVITY = 'SHOW_RESOURCE_SELECT_ACTIVITY';
export const SHOW_RESOURCE_ACTIVITY_TYPE = 'SHOW_RESOURCE_ACTIVITY_TYPE';

export const SHOW_RESOURCE_ACTIVITY_BUILD = 'SHOW_RESOURCE_ACTIVITY_BUILD';
export const HIDE_RESOURCE_ACTIVITY_BUILD = 'HIDE_RESOURCE_ACTIVITY_BUILD';

export const PREVIEW_RESOURCE = 'PREVIEW_RESOURCE';

export const HIDE_PREVIEW_PLAYLIST_MODAL = 'HIDE_PREVIEW_PLAYLIST_MODAL';

export const SHOW_CREATE_PROJECT_MODAL = 'SHOW_CREATE_PROJECT_MODAL';
export const HIDE_CREATE_PROJECT_MODAL = 'HIDE_CREATE_PROJECT_MODAL';

export const LOAD_PLAYLIST = 'LOAD_PLAYLIST';

export const SHOW_DELETE_POPUP = 'SHOW_DELETE_POPUP';
export const HIDE_DELETE_POPUP = 'HIDE_DELETE_POPUP';

export const SHOW_DELETE_PROJECT_MODAL = 'SHOW_DELETE_PROJECT_MODAL';

export const PAGE_LOADING = 'PAGE_LOADING';
export const PAGE_LOADING_COMPLETE = 'PAGE_LOADING_COMPLETE';

export const PROJECT_THUMBNAIL_PROGRESS = 'PROJECT_THUMBNAIL_PROGRESS';
export const UPLOAD_PROJECT_THUMBNAIL = 'UPLOAD_PROJECT_THUMBNAIL';

export const RESOURCE_THUMBNAIL_PROGRESS = 'RESOURCE_THUMBNAIL_PROGRESS';
export const UPLOAD_RESOURCE_THUMBNAIL = 'UPLOAD_RESOURCE_THUMBNAIL';

export const SHOW_RESOURCE_DESCRIBE_ACTIVITY = 'SHOW_RESOURCE_DESCRIBE_ACTIVITY';

export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';
export const SELECT_ACTIVITY_TYPE = 'SELECT_ACTIVITY_TYPE';
export const DESCRIBE_ACTIVITY = 'DESCRIBE_ACTIVITY';

export const RESOURCE_VALIDATION_ERRORS = 'RESOURCE_VALIDATION_ERRORS';

export const LOAD_H5P = 'LOAD_H5P';
export const SHOW_LMS = 'SHOW_LMS';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export const GOOGLE_CLASSROOM_LOGIN = 'GOOGLE_CLASSROOM_LOGIN';
export const SAVE_GENERIC_RESOURCE = 'SAVE_GENERIC_RESOURCE';
export const GOOGLE_SHARE = 'GOOGLE_SHARE';
export const GOOGLE_CLASSROOM_LOGIN_FAILURE = 'GOOGLE_CLASSROOM_LOGIN_FAILURE';

/* New Action Types */

/* Auth & User */
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const CONFIRM_EMAIL_REQUEST = 'CONFIRM_EMAIL_REQUEST';
export const CONFIRM_EMAIL_SUCCESS = 'CONFIRM_EMAIL_SUCCESS';
export const CONFIRM_EMAIL_FAIL = 'CONFIRM_EMAIL_FAIL';

export const ACCEPT_TERMS_REQUEST = 'ACCEPT_TERMS_REQUEST';
export const ACCEPT_TERMS_SUCCESS = 'ACCEPT_TERMS_SUCCESS';
export const ACCEPT_TERMS_FAIL = 'ACCEPT_TERMS_FAIL';

export const LOG_OUT = 'LOG_OUT';

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';
/* Auth & User */

/* Project */
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL';

export const LOAD_PROJECT_REQUEST = 'LOAD_PROJECT_REQUEST';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_FAIL = 'LOAD_PROJECT_FAIL';

export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAIL = 'UPDATE_PROJECT_FAIL';

export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';

export const LOAD_MY_PROJECTS = 'LOAD_MY_PROJECTS';
export const LOAD_MY_PROJECTS_SELECTED = 'LOAD_MY_PROJECTS_SELECTED';
export const SHARE_PROJECT = 'SHARE_PROJECT';
/* Project */

/* Playlist */
export const CREATE_PLAYLIST_REQUEST = 'CREATE_PLAYLIST_REQUEST';
export const CREATE_PLAYLIST_SUCCESS = 'CREATE_PLAYLIST_SUCCESS';
export const CREATE_PLAYLIST_FAIL = 'CREATE_PLAYLIST_FAIL';

export const LOAD_PLAYLIST_REQUEST = 'LOAD_PLAYLIST_REQUEST';
export const LOAD_PLAYLIST_SUCCESS = 'LOAD_PLAYLIST_SUCCESS';
export const LOAD_PLAYLIST_FAIL = 'LOAD_PLAYLIST_FAIL';

export const UPDATE_PLAYLIST_REQUEST = 'UPDATE_PLAYLIST_REQUEST';
export const UPDATE_PLAYLIST_SUCCESS = 'UPDATE_PLAYLIST_SUCCESS';
export const UPDATE_PLAYLIST_FAIL = 'UPDATE_PLAYLIST_FAIL';

export const DELETE_PLAYLIST_REQUEST = 'DELETE_PLAYLIST_REQUEST';
export const DELETE_PLAYLIST_SUCCESS = 'DELETE_PLAYLIST_SUCCESS';
export const DELETE_PLAYLIST_FAIL = 'DELETE_PLAYLIST_FAIL';

export const LOAD_PROJECT_PLAYLISTS = 'LOAD_PROJECT_PLAYLISTS';
/* Playlist */

/* Activity */
export const LOAD_RESOURCE_REQUEST = 'LOAD_RESOURCE_REQUEST';
export const LOAD_RESOURCE_SUCCESS = 'LOAD_RESOURCE_SUCCESS';
export const LOAD_RESOURCE_FAIL = 'LOAD_RESOURCE_FAIL';

export const CREATE_RESOURCE = 'CREATE_RESOURCE';
export const EDIT_RESOURCE = 'EDIT_RESOURCE';
export const DELETE_RESOURCE = 'DELETE_RESOURCE';

export const LOAD_RESOURCE_TYPES_REQUEST = 'LOAD_RESOURCE_TYPES_REQUEST';
export const LOAD_RESOURCE_TYPES_SUCCESS = 'LOAD_RESOURCE_TYPES_SUCCESS';
export const LOAD_RESOURCE_TYPES_FAIL = 'LOAD_RESOURCE_TYPES_FAIL';

export const LOAD_RESOURCE_ITEMS_REQUEST = 'LOAD_RESOURCE_ITEMS_REQUEST';
export const LOAD_RESOURCE_ITEMS_SUCCESS = 'LOAD_RESOURCE_ITEMS_SUCCESS';
export const LOAD_RESOURCE_ITEMS_FAIL = 'LOAD_RESOURCE_ITEMS_FAIL';
/* Activity */

export const SET_LMS_COURSE = 'SET_LMS_COURSE';
