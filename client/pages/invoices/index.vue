<template>
	<v-layout>
		<v-row>
			<!-- Strart page Header -->
			<v-col cols="12">
				<v-breadcrumbs class="pa-0 ma-0" :items="breadCampItems"></v-breadcrumbs>
			</v-col>

			<v-col cols="12" sm="12">
				<div class="d-flex justify-space-between align-center" style="width: 100%">
					<p class="py-0 my-0 black--text headline">{{$t('invoice.title')}}</p>
					<v-btn
						color="success"
						:to="$t('invoice.newinvoiceBtn.url')"
					>{{$t('invoice.newinvoiceBtn.text')}}</v-btn>
				</div>
			</v-col>
			<calculations :overdue="overdueSum" />

			<v-col cols="12" sm="12">
				<dateTable :allItems.sync="invoices" />
			</v-col>
		</v-row>
	</v-layout>
</template>

<script>
import dateTable from "@/components/dataTable.vue";
import calculations from "@/components/calculationSection.vue";

export default {
	middleware: "auth",
	layout: "admin",

	components: {
		dateTable,
		calculations
	},
	data() {
		return {
			invoices: [],
			overdueSum: 0,
			breadCampItems: this.$t("invoice.breadCampItems")
		};
	},
	methods: {},
	async beforeMount() {
		await this.$axios
			.$get("/invoices")
			.then(res => {
				res.forEach(inv => {
					if (
						inv.published &&
						!inv.invoicepaid &&
						new Date(inv.duedate) > Date.now()
					)
						inv.status = this.$t(
							"invoice.table.filters.invoiceTypes.published"
						);
					else if (
						inv.published &&
						!inv.invoicepaid &&
						new Date(inv.duedate) < Date.now()
					) {
						inv.status = this.$t("invoice.table.filters.invoiceTypes.overdue");
						this.overdueSum += Number(inv.summa);
					} else if (inv.published && inv.invoicepaid)
						inv.status = this.$t("invoice.table.filters.invoiceTypes.paid");
					else if (!inv.published)
						inv.status = this.$t("invoice.table.filters.invoiceTypes.draft");

					if (inv.duedate) {
						inv.duedate = new Date(inv.duedate).toISOString().substring(0, 10);
						inv.createdate = new Date(inv.createdate)
							.toISOString()
							.substring(0, 10);
					}
					inv.fromDate = inv.createdate || "-";
					inv.deliveryDate = "-";
				});

				this.invoices = res;
			})
			.catch(err => console.log(err));
	}
};
</script>
<style  scoped>
.blueSection {
	display: block;
	width: 100%;
	height: 200px;
	background-color: #dceaf5;
}
.itm {
	display: block;
	width: 100%;
	height: 100%;
	align-items: center;
	margin: auto;
}
th {
	vertical-align: top;
}
</style>
