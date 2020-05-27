console.log('Service Worker');

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    console.log('Notification received!..')
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://scontent.fctg1-1.fna.fbcdn.net/v/t1.0-1/p160x160/156069_569823409819480_2886328086135274308_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_oc=AQme2wbVjDlv6pyjUHRFeqKA-2sTGdggqe6gdX5KXEz_yY1AurqWHiZ8wdPQkEgx9Ls&_nc_ht=scontent.fctg1-1.fna&_nc_tp=6&oh=9566d5ac1a1f6668a8c4e2271148103f&oe=5EF2B531'
    })
})