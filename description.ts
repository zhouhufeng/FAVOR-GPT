export const variantInfo: {
  [key: string]: string;
} = {
  variant_vcf:
    "The unique identifier of the given variant. Reported as chr-pos-ref-alt format.",
  chromosome: "The chromosome where the variant is located",
  position: "The position where the variant is located",
  bravo_an:
    "TOPMed Bravo Genome Allele Number. (NHLBI TOPMed Consortium, 2018; Taliun et al., 2019)",
  bravo_ac: "TOPMed Bravo Genome Allele Count.",
  bravo_af:
    "TOPMed Bravo Genome Allele Frequency. (NHLBI TOPMed Consortium, 2018; Taliun et al., 2019)",
  filter_status: "TOPMed QC status of the given variant.",
  rsid: "The rsID of the given variant (if exists).",
  genecode_comprehensive_category:
    "Identify whether variants cause protein coding changes using Gencode genes definition systems. It will label the gene name of the variants has impact, if it is intergenic region, the nearby gene name will be labeled in the annotation.",
  genecode_comprehensive_info:
    "Identify whether variants cause protein coding changes using Gencode genes definition systems, it will label the gene name of the variants has impact, if it is intergenic region, the nearby gene name will be labeled in the annotation.",
  genecode_comprehensive_exonic_category:
    "Identify variants impact using Gencode exonic definition, and only label exonic categorical information like, synonymous, non-synonymous, frame-shifts indels, etc.",
  genecode_comprehensive_exonic_info:
    "Identify variants impact using Gencode exonic definition, and only label exonic categorical information like, synonymous, non-synonymous, frame-shifts indels, etc.",
  ucsc_info:
    "Identify whether variants cause protein coding changes using UCSC genes definition systems, it will label the gene name of the variants has impact, if it is intergenic region, the nearby gene name will be labeled in the annotation.",
  ucsc_exonic_info:
    "Identify variants cause protein coding changes using UCSC genes definition, and gives out detail annotation information of which exons of the variant has impacts on and how the impacts causes changes in amino acid changes.",
  polyphen2_hdiv_score:
    "Predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations. HumDiv is Mendelian disease variants vs. divergence from close mammalian homologs of human proteins (>=95% sequence identity). Range: [0, 1] (default: 0).",
  polyphen2_hvar_score:
    "Predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations. HumVar is all human variants associated with some disease (except cancer mutations) or loss of activity/function vs. common (minor allele frequency >1%) human polymorphism with no reported association with a disease of other effect. Range: [0, 1] (default: 0).",
  mutation_taster_score:
    "MutationTaster is a free web-based application to evaluate DNA sequence variants for their disease-causing potential. The software performs a battery of in silico tests to estimate the impact of the variant on the gene product/protein. Range: [0, 1] (default: 0).",
  mutation_assessor_score:
    "Predicts the functional impact of amino-acid substitutions in proteins, such as mutations discovered in cancer or missense polymorphisms. Range: [-5.135, 6.490] (default: -5.545).",
  metasvm_pred: "Description for MetasvmPred",
  refseq_info:
    "Identify whether variants cause protein coding changes using RefSeq genes definition systems, it will label the gene name of the variants has impact, if it is intergenic region, the nearby gene name will be labeled in the annotation.",
  refseq_exonic_info:
    "Identify variants cause protein coding changes using RefSeq genes definition, and give out detailed annotation information of which exons of the variant have impacts on and how the impacts cause changes in amino acid changes.",
  cage_enhancer: "CAGE defined permissive Enhancer sites from Fantom 5.",
  cage_promoter: "CAGE defined promoter sites from Fantom 5.",
  genehancer: "Predicted human enhancer sites from the GeneHancer database.",
  super_enhancer:
    "Predicted super-enhancer sites and targets in a range of human cell types.",
  clnsig:
    "Clinical significance for this single variant. (Landrum et al., 2017, 2013)",
  clnsigincl:
    "Clinical significance for a haplotype or genotype that includes this variant. Reported as pairs of VariationID:clinical significance. (Landrum et al., 2017, 2013)",
  clndn: "Clinical disease name",
  clndnincl:
    "Clinical significance for a haplotype or genotype that includes this variant. Reported as pairs of VariationID:clinical significance.",
  clnrevstat: "ClinVar review status for the Variation ID.",
  origin:
    "Allele origin. One or more of the following values may be added: 0 - unknown; 1 - germline; 2 - somatic; 4 - inherited; 8 - paternal; 16 - maternal; 32 - de-novo; 64 - biparental; 128 - uniparental; 256 - not-tested; 512 - tested-inconclusive.",
  clndisdb:
    "Tag-value pairs of disease database name and identifier, e.g. OMIM:NNNNNN.",
  clndisdbincl:
    "For included variant: Tag-value pairs of disease database name and identifier, e.g. OMIM:NNNNNN.",
  geneinfo:
    "Gene(s) for the variant reported as gene symbol:gene id. The gene symbol and id are delimited by a colon (:) and each pair is delimited by a vertical bar (|).",
  linsight:
    "The LINSIGHT score (integrative score). A higher LINSIGHT score indicates more functionality. Range: [0.215, 0.995].",
  fathmm_xf:
    "The FATHMM-XF score (integrative score). A higher FATHMM-XF score indicates more functionality. Range: [0.405, 99.451].",
  gc: "Percent GC in a window of +/- 75bp. Range: [0, 1] (default: 0.42)",
  cpg: "Percent CpG in a window of +/- 75bp. Range: [0, 0.6] (default: 0.02).",
  min_dist_tss:
    "Distance to closest Transcribed Sequence Start (TSS). Range: [1, 3604058] (default: 1e7).",
  min_dist_tse:
    "Distance to closest Transcribed Sequence End (TSE). Range: [1, 3610636] (default: 1e7).",
  sift_cat: "SIFT category of change.",
  sift_val:
    "SIFT score, ranges from 0.0 (deleterious) to 1.0 (tolerated). Range: [0, 1] (default: 1).",
  polyphen_cat: "PolyPhen category of change.",
  polyphen_val:
    "PolyPhen score: It predicts the functional significance of an allele replacement from its individual features. Range: [0, 1] (default: 0).",
  priphcons:
    "Primate phastCons conservation score (excl. human). A higher score means the region is more conserved. PhastCons considers n species rather than two. It considers the phylogeny by which these species are related, and instead of measuring similarity/divergence simply in terms of percent identity. It uses statistical models of nucleotide substitution that allow for multiple substitutions per site and for unequal rates of substitution between different pairs of bases. Range: [0, 0.999] (default: 0.0).",
  mamphcons:
    "Mammalian phastCons conservation score (excl. human). A higher score means the region is more conserved. PhastCons considers n species rather than two. It considers the phylogeny by which these species are related, and instead of measuring similarity/divergence simply in terms of percent identity. It uses statistical models of nucleotide substitution that allow for multiple substitutions per site and for unequal rates of substitution between different pairs of bases. Range: [0, 1] (default: 0.0).",
  verphcons:
    "Vertebrate phastCons conservation score (excl. human). A higher score means the region is more conserved. PhastCons considers n species rather than two. It considers the phylogeny by which these species are related, and instead of measuring similarity/divergence simply in terms of percent identity. It uses statistical models of nucleotide substitution that allow for multiple substitutions per site and for unequal rates of substitution between different pairs of bases. Range: [0, 1] (default: 0.0).",
  priphylop:
    "Primate phyloP score (excl. human). A higher score means the region is more conserved. PhyloP scores measure evolutionary conservation at individual alignment sites. The scores are calculated by comparing with the evolution expected under neutral drift. Positive scores: measure conservation, i.e., slower evolution than expected, at sites that are predicted to be conserved. Negative scores: measure acceleration, i.e., faster evolution than expected, at sites that are predicted to be fast-evolving. Range: [-10.761, 0.595] (default: -0.029).",
  mamphylop:
    "Mammalian phyloP score (excl. human). A higher score means the region is more conserved. PhyloP scores measure evolutionary conservation at individual alignment sites. The scores are calculated by comparing with the evolution expected under neutral drift. Positive scores: measure conservation, i.e., slower evolution than expected, at sites that are predicted to be conserved. Negative scores: measure acceleration, i.e., faster evolution than expected, at sites that are predicted to be fast-evolving. Range: [-20, 4.494] (default: -0.005).",
  verphylop:
    "Vertebrate phyloP score (excl. human). A higher score means the region is more conserved. PhyloP scores measure evolutionary conservation at individual alignment sites. The scores are calculated by comparing with the evolution expected under neutral drift. Positive scores: measure conservation, i.e., slower evolution than expected, at sites that are predicted to be conserved. Negative scores: measure acceleration, i.e., faster evolution than expected, at sites that are predicted to be fast-evolving. Range: [-20, 11.295] (default: 0.042).",
  bstatistic:
    "Background selection score. A background selection (B) value for each position in the genome. B indicates the expected fraction of neutral diversity that is present at a site, with values close to 0 representing near complete removal of diversity as a result of selection and values near 1000 indicating little effect of selection. Range: [0, 1000] (default: 800).",
  chmm_e1:
    "Number of 48 cell types in chromHMM state E1_poised. (default: 1.92).",
  chmm_e2:
    "Number of 48 cell types in chromHMM state E2_repressed. (default: 1.92).",
  chmm_e3:
    "Number of 48 cell types in chromHMM state E3_dead. (default: 1.92).",
  chmm_e4:
    "Number of 48 cell types in chromHMM state E4_dead. (default: 1.92).",
  chmm_e5:
    "Number of 48 cell types in chromHMM state E5_repressed. (default: 1.92).",
  chmm_e6:
    "Number of 48 cell types in chromHMM state E6_repressed. (default: 1.92).",
  chmm_e7:
    "Number of 48 cell types in chromHMM state E7_weak. (default: 1.92).",
  chmm_e8:
    "Number of 48 cell types in chromHMM state E8_gene. (default: 1.92).",
  chmm_e9:
    "Number of 48 cell types in chromHMM state E9_gene. (default: 1.92).",
  chmm_e10:
    "Number of 48 cell types in chromHMM state E10_gene. (default: 1.92).",
  chmm_e11:
    "Number of 48 cell types in chromHMM state E11_gene. (default: 1.92).",
  chmm_e12:
    "Number of 48 cell types in chromHMM state E12_distal. (default: 1.92).",
  chmm_e13:
    "Number of 48 cell types in chromHMM state E13_distal. (default: 1.92).",
  chmm_e14:
    "Number of 48 cell types in chromHMM state E14_distal. (default: 1.92).",
  chmm_e15:
    "Number of 48 cell types in chromHMM state E15_weak. (default: 1.92).",
  chmm_e16:
    "Number of 48 cell types in chromHMM state E16_tss. (default: 1.92).",
  chmm_e17:
    "Number of 48 cell types in chromHMM state E17_proximal. (default: 1.92).",
  chmm_e18:
    "Number of 48 cell types in chromHMM state E18_proximal. (default: 1.92).",
  chmm_e19:
    "Number of 48 cell types in chromHMM state E19_tss. (default: 1.92).",
  chmm_e20:
    "Number of 48 cell types in chromHMM state E20_poised. (default: 1.92).",
  chmm_e21:
    "Number of 48 cell types in chromHMM state E21_dead. (default: 1.92).",
  chmm_e22:
    "Number of 48 cell types in chromHMM state E22_repressed. (default: 1.92).",
  chmm_e23:
    "Number of 48 cell types in chromHMM state E23_weak. (default: 1.92).",
  chmm_e24:
    "Number of 48 cell types in chromHMM state E24_distal. (default: 1.92).",
  chmm_e25:
    "Number of 48 cell types in chromHMM state E25_distal. (default: 1.92).",
  gerp_n:
    "Neutral evolution score defined by GERP++. A higher score means the region is more conserved. Range: [0, 19.8] (default: 3.0).",
  gerp_s:
    "Rejected Substitution score defined by GERP++. A higher score means the region is more conserved. GERP (Genomic Evolutionary Rate Profiling) identifies constrained elements in multiple alignments by quantifying substitution deficits. These deficits represent substitutions that would have occurred if the element were neutral DNA, but did not occur because the element has been under functional constraint. These deficits are referred to as 'Rejected Substitutions'. Rejected substitutions are a natural measure of constraint that reflects the strength of past purifying selection on the element. GERP estimates constraint for each alignment column; elements are identified as excess aggregations of constrained columns. Positive scores (fewer than expected) indicate that a site is under evolutionary constraint. Negative scores may be weak evidence of accelerated rates of evolution. Range: [-39.5, 19.8] (default: -0.2).",
  encodeh3k4me1_sum:
    "Maximum Encode H3K4me1 level over 13 cell lines. Range: [0.015, 91.954] (default: 0.37).",
  encodeh3k4me2_sum:
    "Maximum Encode H3K4me2 level over 14 cell lines. Range: [0.024, 148.887] (default: 0.37).",
  encodeh3k4me3_sum:
    "Maximum Encode H3K4me3 level over 14 cell lines. Range: [0.012, 239.512] (default: 0.38).",
  encodeh3k9ac_sum:
    "Maximum Encode H3K9ac level over 13 cell lines. Range: [0.019, 281.187] (default: 0.41).",
  encodeh3k9me3_sum:
    "Maximum Encode H3K9me3 level over 14 cell lines. Range: [0.011, 58.712] (default: 0.38).",
  encodeh3k27ac_sum:
    "Maximum Encode H3K27ac level over 14 cell lines. Range: [0.013, 288.608] (default: 0.36).",
  encodeh3k27me3_sum:
    "Maximum Encode H3K27me3 level over 14 cell lines. Range: [0.014, 87.122] (default: 0.47).",
  encodeh3k36me3_sum:
    "Maximum Encode H3K36me3 level over 10 cell lines. Range: [0.009, 56.176] (default: 0.39).",
  encodeh3k79me2_sum:
    "Maximum Encode H3K79me2 level over 13 cell lines. Range: [0.015, 118.706] (default: 0.34).",
  encodeh4k20me1_sum:
    "Maximum Encode H4K20me1 level over 11 cell lines. Range: [0.054, 73.230] (default: 0.47).",
  encodeh2afz_sum:
    "Maximum Encode H2AFZ level over 13 cell lines. Range: [0.031, 96.072] (default: 0.42).",
  encode_dnase_sum:
    "Maximum Encode DNase-seq level over 12 cell lines. Range: [0.001, 118672] (default: 0.0).",
  encodetotal_rna_sum:
    "Maximum Encode totalRNA-seq level over 10 cell lines (minus and plus strand separately). Range: [0, 92282.7]",
  grantham:
    "Grantham score: oAA, nAA. It attempts to predict the distance between two amino acids, in an evolutionary sense. A lower Grantham score reflects less evolutionary distance. A higher Grantham score reflects a greater evolutionary distance, and is considered more deleterious. Range: [0, 215] (default: 0).",
  freq100bp:
    "Number of common (MAF > 0.05) BRAVO SNVs in the nearby 100 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 100. Range: [0, 13]",
  rare100bp:
    "Number of rare (MAF < 0.05) BRAVO SNVs in the nearby 100 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 31 (default: 0).",
  sngl100bp:
    "Number of single occurrence of BRAVO SNVs in the nearby 100 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutation. Scores range from 0 to 99 (default: 0).",
  freq1000bp:
    "Number of common (MAF > 0.05) BRAVO SNVs in the nearby1000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 1000. Range: [0, 73] (default: 0).",
  rare1000bp:
    "Number of rare (MAF < 0.05) BRAVO SNVs in the nearby 1000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 74 (default: 0).",
  sngl1000bp:
    "Number of single occurrence of BRAVO SNVs in the nearby 1000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutation. Scores range from 0 to 658 (default: 0).",
  freq10000bp:
    "Number of common (MAF > 0.05) BRAVO SNVs in the nearby 10000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 10000. Range: [0, 443] (default: 0).",
  rare10000bp:
    "Number of rare (MAF < 0.05) BRAVO SNVs in the nearby 10000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutations. Scores range from 0 to 355 (default: 0).",
  sngl10000bp:
    "Number of single occurrence of BRAVO SNVs in the nearby 10000 bp window (default: 0). A higher value indicates more mutations happen in the region and a higher likelihood of mutation. Scores range from 0 to 4750 (default: 0).",
  remap_overlap_tf:
    "Remap number of different transcription factors binding. Range: [1, 350] (default: -0.5).",
  remap_overlap_cl:
    "Remap number of different transcription factor - cell line combinations binding. Range: [1, 1068] (default: -0.5).",
  cadd_rawscore:
    "The CADD raw score (integrative score). A higher CADD score indicates more deleterious. Range: [-237.102, 22.763].",
  cadd_phred:
    "The CADD score in PHRED scale (integrative score). A higher CADD score indicates more deleterious. Range: [0, 99].",
  apc_conservation_v2:
    "Conservation annotation PC: the first PC of the standardized scores of “GerpN, GerpS, priPhCons, mamPhCons, verPhCons, priPhyloP, mamPhyloP, verPhyloP” in PHRED scale. Range: [0, 75.824].",
  apc_epigenetics_active:
    "Active Epigenetic annotation PC: the first PC of the standardized scores of “EncodeH3K4me1.max, EncodeH3K4me2.max, EncodeH3K4me3.max, EncodeH3K9ac.max, EncodeH3K27ac.max, EncodeH4K20me1.max，EncodeH2AFZ.max,” in PHRED scale. Range: [0, 86.238].",
  apc_epigenetics_repressed:
    "Repressed Epigenetic annotation PC: the first PC of the standardized scores of “EncodeH3K9me3.max, EncodeH3K27me3.max” in PHRED scale. Range: [0, 86.238].",
  apc_epigenetics_transcription:
    "Transcription Epigenetic annotation PC: the first PC of the standardized scores of “EncodeH3K36me3.max, EncodeH3K79me2.max” in PHRED scale. Range: [0, 86.238].",
  apc_local_nucleotide_diversity_v3:
    "Local nucleotide diversity annotation PC: the first PC of the standardized scores of “bStatistic, RecombinationRate, NuclearDiversity” in PHRED scale. Range: [0, 86.238].",
  apc_mappability:
    "Mappability annotation PC: the first PC of the standardized scores of “umap_k100, bismap_k100, umap_k50, bismap_k50, umap_k36, bismap_k36, umap_k24, bismap_k24” in PHRED scale. Range: [0.007, 22.966].",
  apc_mutation_density:
    "Mutation density annotation PC: the first PC of the standardized scores of “Common100bp, Rare100bp, Sngl100bp, Common1000bp, Rare1000bp, Sngl10000bp, Common10000bp, Rare10000bp, Sngl10000bp” in PHRED scale. Range: [0, 84.477].",
  apc_protein_function_v3:
    "Protein function annotation PC: the first PC of the standardized scores of “SIFTval, PolyPhenVal, Grantham, Polyphen2_HDIV_score, Polyphen2_HVAR_score, MutationTaster_score, MutationAssessor_score” in PHRED scale. Range: [2.974, 86.238].",
  apc_transcription_factor:
    "Transcription factor annotation PC: the first PC of the standardized scores of “RemapOverlapTF, RemapOverlapCL” in PHRED scale. Range: [1.185, 86.238].",
  tg_afr: "1000 Genomes African population frequency.",
  tg_all:
    "GNOMAD v3 Genome African population frequency. (GNOMAD Consortium, 2019; Karczewski et al., 2020)",
  tg_amr: "1000 Genomes Ad Mixed American population frequency.",
  tg_eas: "1000 Genomes East Asian population frequency.",
  tg_eur: "1000 Genomes European population frequency.",
  tg_sas: "1000 Genomes South Asian population frequency.",
  af_total: "GNOMAD v3 Genome Allele Frequency using all the samples.",
  af_asj_female:
    "GNOMAD v3 Genome Ashkenazi Jewish Female population frequency.",
  af_eas_female: "Description for AfEasFemale",
  af_afr_male: "Description for AfAfrMale",
  af_female: "Description for AfFemale",
  af_fin_male: "GNOMAD v3 Genome East Asian Female population frequency.",
  af_oth_female:
    "GNOMAD v3 Genome Other (population not assigned) Female frequency.",
  af_ami: "GNOMAD v3 Genome Amish population frequency.",
  af_oth: "GNOMAD v3 Genome Other (population not assigned) frequency.",
  af_male: "GNOMAD v3 Genome Male Allele Frequency.",
  af_ami_female: "GNOMAD v3 Genome Amish Female population frequency.",
  af_afr: "GNOMAD v3 Genome African population frequency.",
  af_eas_male: "GNOMAD v3 Genome East Asian Male population frequency.",
  af_sas: "GNOMAD v3 Genome South Asian population frequency.",
  af_nfe_female:
    "GNOMAD v3 Genome Non-Finnish European Female population frequency.",
  af_asj_male: "GNOMAD v3 Genome Ashkenazi Jewish Male population frequency.",
  af_oth_male:
    "GNOMAD v3 Genome Other (population not assigned) Male frequency.",
  af_nfe_male:
    "GNOMAD v3 Genome Non-Finnish European Male population frequency.",
  af_asj: "GNOMAD v3 Genome Ashkenazi Jewish population frequency.",
  af_amr_male: "GNOMAD v3 Genome Ad Mixed American Male population frequency.",
  af_amr_female:
    "GNOMAD v3 Genome Ad Mixed American Female population frequency.",
  af_sas_female: "GNOMAD v3 Genome South Asian Female population frequency.",
  af_fin: "GNOMAD v3 Genome Finnish European population frequency.",
  af_afr_female: "GNOMAD v3 Genome African Female population frequency.",
  af_sas_male: "GNOMAD v3 Genome South Asian Male population frequency.",
  af_amr: "GNOMAD v3 Genome Ad Mixed American population frequency.",
  af_nfe: "GNOMAD v3 Genome Non-Finnish European population frequency.",
  af_eas: "GNOMAD v3 Genome East Asian population frequency.",
  af_ami_male: "GNOMAD v3 Genome Amish Male population frequency.",
  af_fin_female:
    "GNOMAD v3 Genome Finnish European Female population frequency.",
  "Bismap (k100, k50, k36, k24)":
    "Mappability of the bisulfite-converted genome. Bisulfite sequencing approaches used to identify DNA methylation introduce large numbers of reads that map to multiple regions. This annotation identifies mappability of the bisulfite-converted genome. Range: [0, 1] (default: 0).",
  "Umap (k100, k50, k36, k24)":
    "Mappability of unconverted genome. It measures the extent to which a position can be uniquely mapped by sequence reads. Lower mappability means the estimates of genomic and epigenomic characteristics from sequencing assays are less reliable, and the region has increased susceptibility to spurious mapping from reads from other regions of the genome with sequencing errors or unexpected genetic variation. Range: [0, 1] (default: 0).",
  recombination_rate:
    "Recombination rate measures the probability of how likely the region tends to undergo recombination. Range: [0, 54.96] (default: 0).",
  nucdiv:
    "Nuclear diversity measures the probability of how likely the region diversify. Range: [0.05, 60.25] (default: 0).",
  aloft_value:
    "ALoFT provides extensive annotations to putative loss-of-function variants (LoF) in protein-coding genes including functional, evolutionary and network features (integrative score).",
  aloft_description:
    "ALoFT annotation can predict the impact of premature stop variants and classify them as dominant disease-causing, recessive disease-causing and benign variants (integrative score).",
  funseq_value:
    "A flexible framework to prioritize regulatory mutations from cancer genome sequencing (integrative score).",
  funseq_description:
    "Funseq annotation pints out whether given mutation falls in coding or non-coding region (integrative score).",
};
