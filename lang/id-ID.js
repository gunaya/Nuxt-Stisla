import dashboard from './id/dashboard';
import test_page from './id/test_page';
import profile from './id/profile';
import button from './id/button';

export default {
    hello: 'Halo Dunia',

    // setting halaman
    pages: {
      home: 'Halaman Muka',
      contacts: 'Kontak',
      dashboard: 'Dashboard',
      blank: 'Halaman Kosong',
      test: 'Halaman Uji'
    },

    // setting header
    header: {
        search: {
            placeholder: 'Pencarian',
            histories: 'Riwayat',
            result: 'Hasil',
            projects: 'Proyek'
        },
        notif: {
            title: 'Notifikasi',
            mark_all: 'Tandai Semua Telah Dibaca',
            view_all: 'Tampilkan Semua'
        },
        message: {
            title: 'Pesan',
            mark_all: 'Tandai Semua Telah Dibaca',
            view_all: 'Tampilkan Semua'
        },
        change_language: 'Ganti Bahasa',
        login: 'Masuk',
        login_when: 'lalu',
        profile: 'Profil',
        activities: 'Aktivitas',
        settings: 'Pengaturan',
        logout: 'Keluar'
    },

    // setting sidebar
    sidebar: {
        starter: 'Permulaan'
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