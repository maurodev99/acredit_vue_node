<template>
	<div>
    <div v-if="draft">
		  <newInvoice :draft="draft" />
    </div>
	</div>
</template>

<script>
import newInvoice from "@/components/NewInvoice";
export default {
	middleware: "auth",
	layout: "admin",

	data() {
		return {
			draft: null
		};
	},
	components: {
		newInvoice
	},
	async beforeMount() {
		await this.$axios
			.$get(`/invoices/${this.$route.params.id}`)
			.then(async res => {
				this.draft = res[0];
				await this.$axios
					.$get(`/customers/${res[0].userid}`)
					.then(res => {
						console.log(res);
					})
					.catch(err => console.log(err));
				this.$store.commit("setCustomer", res);
			});
	}
};
</script>

<style>
</style>
