<template>
    <v-footer fluid style="background-color: black; color: white;">
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <h3>ABOUT</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>GROUP COMPANIES</h3>
                    <ul>
                        <li><a href="#">SpendSmart</a></li>
                        <li><a href="#">ManageSafely</a></li>
                        <li><a href="#">MakeTask</a></li>
                    </ul>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>HELP</h3>
                    <ul>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Report Infringement</a></li>
                    </ul>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>CONSUMER POLICY</h3>
                    <ul>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Grievance Redressal</a></li>
                        <li><a href="#">EPR Compliance</a></li>
                    </ul>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="12" md="3">
                    <h3>Mail Us:</h3>
                    <p>
                        Gowri shankar Internet Private Limited,<br />
                        Bk pudur Kuniyamuthur, &<br />
                        Coimbatore, 560103,<br />
                        Tamil nadu, India
                    </p>
                </v-col>
                <v-col cols="12" md="3">
                    <h3>Registered Office Address:</h3>
                    <p>
                        Gowri shankar  Internet Private Limited,<br />
                        Bk pudur, Kuniyamuthur &<br />
                        gandhipuram,<br />
                        Coimbatore, 560103,<br />
                        Tamil nadu, India<br />
                        Telephone: 044-00000000 / 044-00000000
                    </p>
                </v-col>
                <v-col cols="12" md="6">
                    <v-row>
                        <v-col cols="4">
                            <a href="#">Become a Seller</a>
                        </v-col>
                        <v-col cols="4">
                            <a href="#">Advertise</a>
                        </v-col>
                        <v-col cols="4">
                            <a href="#">Gift Cards</a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <a href="#">Help Center</a>
                        </v-col>
                        <v-col cols="4">
                            <a href="#">Payments</a>
                        </v-col>
                        <v-col cols="4">
                            <a href="#">Security</a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="12" class="text-center">
                    <span>&copy; gowrishankarsrinivasan3@gmail.com</span>
                    <v-row justify="center" class="mt-2">
                        <v-icon class="mx-2">mdi-facebook</v-icon>
                        <v-icon class="mx-2">mdi-twitter</v-icon>
                        <v-icon class="mx-2">mdi-youtube</v-icon>
                    </v-row>
                    <v-row justify="center" class="mt-2">
                        <v-img src="visa.png" height="40"></v-img>
                        <v-img src="mastercard.png" height="40"></v-img>
                        <v-img src="discover.png" height="40"></v-img>
                        <v-img src="rupay.png" height="40"></v-img>
                        <v-img src="netbanking.png" height="40"></v-img>
                        <v-img src="cashondelivery.png" height="40"></v-img>
                        <v-img src="emi.png" height="40"></v-img>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>
v-footer {
    background-color: #333;
    /* color: white; */
    padding: 20px 0;
}

h3 {
    margin-top: 0;
    color: #f5f5f5;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

a {
    color: #f5f5f5;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>