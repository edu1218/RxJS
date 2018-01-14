function subscribe(observer) {
    observer.next('Jerry');
    observer.next('Anna');
}

subscribe({
next: function(value) {
    console.log(value);
},
error: function(error) {
    console.log(error)
},
complete: function() {
    console.log('complete')
}
});