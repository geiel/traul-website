<script lang="ts">
	import Google from '../../components/Google.svelte';
</script>

<div class="bg-gradient-to-br from-blue-100 to-cyan-100">
	<div class="container mx-auto flex h-screen items-center justify-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title flex justify-center p-5">Ingresa con tu gmail</h2>
				<div class="card-actions justify-center">
					<form method="POST" action="?/google">
						<button class="btn btn-wide">
							<Google class="mr-2 h-4 w-4" />
							Google
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
