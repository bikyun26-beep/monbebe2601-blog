<script>
  const commentsRef = db.ref("comments");

  // Submit komentar
  document.getElementById("commentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;
    commentsRef.push({
      nama: nama,
      pesan: pesan,
      waktu: Date.now()
    });
    document.getElementById("commentForm").reset();
  });

  // Tampilkan komentar realtime
  commentsRef.on("child_added", (snapshot) => {
    const data = snapshot.val();
    const li = document.createElement("li");
    li.textContent = `${data.nama}: ${data.pesan}`;
    document.getElementById("commentList").appendChild(li);
  });
</script>
