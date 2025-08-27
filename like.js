<script>
  const likesRef = db.ref("likes");

  // Baca jumlah likes dari DB realtime
  likesRef.on("value", (snapshot) => {
    document.getElementById("likes").textContent = snapshot.val() || 0;
  });

  // Batasi like hanya 1x per browser pakai localStorage
  document.getElementById("likeBtn").addEventListener("click", () => {
    if (localStorage.getItem("liked")) {
      alert("Kamu sudah like sekali 💕");
      return;
    }
    likesRef.transaction((currentLikes) => (currentLikes || 0) + 1);
    localStorage.setItem("liked", "true");
  });
</script>
