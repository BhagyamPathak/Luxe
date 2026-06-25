    // Countdown timer
    function updateTimer() {
        var el = document.getElementById('timer');
        if (!el) return;
        var parts = el.textContent.split(':').map(Number);
        var h = parts[0], m = parts[1], s = parts[2];
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        el.textContent = (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
    }
    setInterval(updateTimer, 1000);

    // Add to cart feedback
    document.querySelectorAll('.add-to-cart').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var orig = this.innerHTML;
            this.innerHTML = '<svg class="icon" width="14" height="14"><use href="#ico-check"/></svg> Added';
            this.style.background = 'var(--teal2)';
            var self = this;
            setTimeout(function() {
                self.innerHTML = orig;
                self.style.background = '';
            }, 1500);
        });
    });