 <script>
        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;


            const day = now.getDate();
            const month = now.getMonth() + 1;
            const year = now.getFullYear();
            const dateString = `${day}/${month}/${year}`;

            document.getElementById("date").textContent = dateString;
        }


        setInterval(updateTime, 1000);


        updateTime();
    </script>