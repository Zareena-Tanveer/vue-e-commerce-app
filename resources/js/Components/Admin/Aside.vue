<script setup>
import NavLink from "../Admin/NavLink.vue";
</script>

<template>
    <div class="sidebar-inner niceScrollleft">
        <div id="sidebar-menu">
            <ul>
                <li class="menu-title">Main</li>

                <li>
                    <NavLink :href="route('admin.dashboard')" :active="route().current('admin.dashboard')">
                        <i class="mdi mdi-airplay"></i>
                        <span>Dashboard</span>
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink :href="route('products.index')" :active="route().current('products.index')">
                        <i class="mdi mdi-airplay"></i>
                        <span>Products</span>
                    </NavLink>
                    <!-- <a :href="route('products.index')" class="waves-effect">
                        <i class="mdi mdi-airplay"></i>
                        <span> Products <span class="badge badge-pill badge-primary float-right">7</span></span>
                    </a> -->
                </li>
                <li class="has_sub">
                    <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-layers"></i> <span> Advanced UI </span> <span class="float-right"><i class="mdi mdi-chevron-right"></i></span></a>
                    <ul class="list-unstyled">
                        <li><a href="advanced-highlight.html">Highlight</a></li>
                    </ul>
                </li>

            </ul>
        </div>
        <div class="clearfix"></div>
    </div> <!-- end sidebarinner -->
</template>