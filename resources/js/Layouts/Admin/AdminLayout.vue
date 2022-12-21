

<script setup>
import TopBar from "@/Components/Admin/TopBar.vue";
import Aside from "@/Components/Admin/Aside.vue";
</script>


<template>
    <!-- Loader -->
    <!-- <div id="preloader"><div id="status"><div class="spinner"></div></div></div> -->

<!-- Begin page -->
<div id="wrapper">

    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">
        <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
            <i class="ion-close"></i>
        </button>

        <!-- LOGO -->
        <div class="topbar-left">
            <div class="text-center">
                <!-- <a href="index.html" class="logo"><i class="mdi mdi-assistant"></i>Zoter</a> -->
                <a href="" class="logo">
                    <img src="/assets/images/logo-lg.png" alt="" class="text-center w-40 ml-4 py-3 flex">
                </a>
            </div>
        </div>

        <Aside />
    </div>
    <!-- Left Sidebar End -->

    <!-- Start right Content here -->
    <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <TopBar />

                    <div class="page-content-wrapper ">

                        <div class="container-fluid">

                            <slot />
                            
                        </div><!-- container -->

                    </div> <!-- Page content Wrapper -->

                </div> <!-- content -->

                <footer class="footer">
                    © 2022 by Zareena Tanveer.
                </footer>
            </div>
            <!-- End Right content here -->

        </div>
        <!-- END wrapper -->
</template>
        