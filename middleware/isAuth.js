export default function ({ store, redirect }) {
    let login_status = store.state.user.is_login;

    if (login_status == 1) {
        return redirect('/admin/dashboard')
    } else {
        return redirect('/login')
    }
}