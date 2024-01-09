const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

// onupgradeneeded: 데이터베이스가 처음 만들어질 때 또는 버전이 변경될 때만 실행
dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function () {
  console.log("ERROR!");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p2",
      title: "A Second Product",
      price: 122.99,
      tags: ["Expensive", "Luxury"],
    });
});

retrBtn.addEventListener("click", () => {
  const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function() {
    console.log(request.result);
  }
});
