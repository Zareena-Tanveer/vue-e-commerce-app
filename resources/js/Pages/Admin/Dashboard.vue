<style>

</style>

<script setup>
import AdminLayout from '@/Layouts/Admin/AdminLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import Breadcrumb from "@/Components/Breadcrumb.vue";

</script>

<template>
    <Head title="Admin Dashboard" />

    <AdminLayout>
        <Breadcrumb title="Dashboard">
        </Breadcrumb>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in as Admin!</div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
