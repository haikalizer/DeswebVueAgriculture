v<template>
    <div>
      <!-- Bagian Judul dan Deskripsi -->
      <div class="bg-teal-500 text-white py-8 text-center">
        <h1 class="text-4xl font-bold">Hasil Tangkapan</h1>
        <p class="mt-2">Temukan hasil laut segar langsung dari nelayan.</p>
      </div>
  
      <!-- Kategori Filter -->
      <div class="flex justify-center space-x-4 my-4">
        <button @click="filterCategory('Semua')" class="btn">Semua Kategori</button>
        <button @click="filterCategory('Ikan')" class="btn">Ikan</button>
        <button @click="filterCategory('Udang')" class="btn">Udang</button>
        <button @click="filterCategory('Kepiting')" class="btn">Kepiting</button>
        <button @click="filterCategory('Rumput Laut')" class="btn">Rumput Laut</button>
      </div>
  
      <!-- Daftar Hasil Tangkapan -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="border rounded-lg overflow-hidden shadow-lg"
        >
          <img :src="item.image" alt="hasil tangkapan" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
            <a
              :href="'https://wa.me/' + item.sellerContact"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              Hubungi Penjual
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Data hasil tangkapan dengan gambar yang diimpor menggunakan require
  const items = ref([
    { 
      id: 1, 
      name: 'Ikan Nila', 
      description: 'Ikan nila segar langsung dari laut', 
      category: 'Ikan', 
      image: require('@/assets/image/ikannila.jpg'), 
      sellerContact: '628123456789' 
    },
    { 
      id: 2, 
      name: 'Udang Galah', 
      description: 'Udang galah besar dan segar', 
      category: 'Udang', 
      image: require('@/assets/image/udangtambak.jpg'), 
      sellerContact: '628987654321' 
    },
  ]);
  
  // State untuk kategori yang dipilih
  const selectedCategory = ref('Semua');
  
  // Filter hasil tangkapan berdasarkan kategori
  const filteredItems = computed(() => {
    if (selectedCategory.value === 'Semua') {
      return items.value;
    }
    return items.value.filter(item => item.category === selectedCategory.value);
  });
  
  // Fungsi untuk mengubah kategori
  function filterCategory(category) {
    selectedCategory.value = category;
  }
  </script>
  
  <style scoped>
  .btn {
    @apply bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600;
  }
  </style>
  