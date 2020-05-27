const PUBLIC_VAPID_KEY = 'BHfnN7WOzeICqRIHtVlUvHa_6135PDpiy5j8BUjKPvAUQHgcsFM-dhfFOkQAlxR3Y45q_vriXYRI-zI5RSYuGAw'

let PUBLIC_VAPID_KEY64 = PUBLIC_VAPID_KEY.toString('base64');
//urlBase64ToUint8Array_p(PUBLIC_VAPID_KEY);

const subscription = async() => {

    // ServiceWorker
    /* Registramos nuestro archivo worker.js */
    /* await para metodos asincronos */
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/' /* Alcance de que rutas va acceder */
    });
    console.log('New ServiceWorker');

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY64
    });

    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Subscribed!..');

}

subscription();