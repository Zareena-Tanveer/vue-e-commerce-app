<script setup>
import { Link } from '@inertiajs/inertia-vue3';
defineProps({
    'title':String,
})
</script>
<template>
    <div class="row">
            <div class="col-sm-12">
                <div class="page-title-box">
                    <div class="btn-group float-right">
                        <ol class="breadcrumb hide-phone p-0 m-0">
                            <li class="breadcrumb-item"><Link :href="route('admin.dashboard')">Home</Link></li>
                            <li class="breadcrumb-item active">{{title}}</li>
                        </ol>
                    </div>
                    <h4 class="page-title font-roboto-400">{{title}}</h4>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
</template>