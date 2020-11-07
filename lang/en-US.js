import dashboard from "./en/dashboard";
import test_page from "./en/test_page";
import profile from './en/profile';
import button from './en/button';

export default {
    hello: 'Hello World',

    // setting halaman
    pages: {
      home: 'Home',
      contacts: 'Contacts',
      dashboard: 'Dashboard',
      blank: 'Blank',
      test: 'Test Page'
    },

    // setting header
    header: {
        search: {
            placeholder: 'Search',
            histories: 'Histories',
            result: 'Result',
            projects: 'Projects'
        },
        notif: {
            title: 'Notifications',
            mark_all: 'Mark All As Read',
            view_all: 'View All'
        },
        message: {
            title: 'Messages',
            mark_all: 'Mark All As Read',
            view_all: 'View All'
        },
        change_language: 'Change Language',
        login: 'Logged in',
        login_when: 'ago',
        profile: 'Profile',
        activities: 'Activities',
        settings: 'Settings',
        logout: 'Logout'
    },

    // setting sidebar
    sidebar: {
        starter: 'Starter'
    },

    // setting footer
    footer: {

    },

    // setting per-halaman
    dashboard: dashboard(),
    test_page: test_page(),
    profile : profile(),

    // setting components
    button: button()
}