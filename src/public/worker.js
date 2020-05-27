console.log('Service Worker');

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    console.log('Notification received!..')
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://t4.ftcdn.net/jpg/00/54/18/95/240_F_54189586_DmUCYPPtXBVLjaqKMQoiQiMdvhcbTJvX.jpg'
    })
})