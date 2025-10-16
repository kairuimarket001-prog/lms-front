export default {
    auth: {
        login: {
            title: 'ログイン',
            email: 'メールアドレス',
            password: 'パスワード',
            forgotPassword: 'パスワードをお忘れですか？',
            submit: 'ログイン',
            noAccount: 'アカウントをお持ちでないですか？',
            signUp: '新規登録',
            or: 'または',
            googleSignIn: 'Googleでログイン',
            githubSignIn: 'GitHubでログイン'
        },
        signup: {
            title: '無料アカウント作成',
            email: 'メールアドレス',
            password: 'パスワード',
            confirmPassword: 'パスワード（確認）',
            submit: '登録',
            hasAccount: 'すでにアカウントをお持ちですか？',
            signIn: 'ログイン',
            terms: '利用規約とプライバシーポリシーに同意します',
            agreeToTerms: '登録することで、{terms}と{privacy}に同意したことになります',
            termsLink: '利用規約',
            privacyLink: 'プライバシーポリシー'
        },
        forgotPassword: {
            title: 'パスワードリセット',
            description: 'メールアドレスを入力してください。パスワードリセット用のリンクをお送りします。',
            email: 'メールアドレス',
            submit: 'リセットリンクを送信',
            backToLogin: 'ログインに戻る',
            success: 'パスワードリセット用のリンクを送信しました'
        },
        resetPassword: {
            title: '新しいパスワードを設定',
            newPassword: '新しいパスワード',
            confirmPassword: 'パスワード（確認）',
            submit: 'パスワードを更新',
            success: 'パスワードが正常に更新されました'
        }
    },
    dashboard: {
        sidebar: {
            home: 'ホーム',
            courses: 'コース',
            myCourses: 'マイコース',
            manageCourses: 'コース管理',
            chat: 'AIチャット',
            account: 'アカウント',
            settings: '設定',
            logout: 'ログアウト',
            notifications: '通知'
        },
        header: {
            search: '検索...',
            profile: 'プロフィール',
            settings: '設定',
            logout: 'ログアウト'
        }
    },
    common: {
        loading: '読み込み中...',
        error: 'エラーが発生しました',
        success: '成功しました',
        save: '保存',
        cancel: 'キャンセル',
        delete: '削除',
        edit: '編集',
        submit: '送信',
        back: '戻る',
        next: '次へ',
        previous: '前へ',
        close: '閉じる',
        search: '検索',
        filter: 'フィルター',
        sort: '並び替え',
        viewAll: 'すべて表示',
        learnMore: '詳細を見る',
        getStarted: '今すぐ始める',
        readMore: '続きを読む'
    }
} as const
