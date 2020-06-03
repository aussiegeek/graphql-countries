import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Information about a single country */
export type Country = {
  __typename?: 'Country';
  /** Commonly used English name for the country */
  name: Scalars['String'];
  /** Offically used English name for the country */
  officialName: Scalars['String'];
  /** Other native & translated country names */
  names: Array<CountryName>;
  /** country code top-level domain */
  tld: Array<Scalars['String']>;
  /** code ISO 3166-1 alpha-2 */
  cca2: Scalars['String'];
  /** code ISO 3166-1 numeric */
  ccn3: Scalars['String'];
  /** code ISO 3166-1 alpha-3 */
  cca3: Scalars['String'];
  /** code International Olympic Committee */
  cioc: Scalars['String'];
  /** ISO 3166-1 independence status, true if indepdendent */
  independent: Maybe<Scalars['Boolean']>;
  /** ISO 3166-1 assignment status */
  status: Iso3166Status;
  /** Currencies used in the country */
  currencies: Array<Currency>;
  /** Name of the capital city or cities */
  capitalCities: Array<Scalars['String']>;
  /** Alternative spellings */
  altSpellings: Array<Scalars['String']>;
  /** Region */
  region: Region;
  /** Subregion */
  subregion: Scalars['String'];
  /** Emoji representation of the country's flag */
  emoji: Scalars['String'];
};

export enum Iso3166Status {
  OfficiallyAssigned = 'OFFICIALLY_ASSIGNED',
  UserAssigned = 'USER_ASSIGNED'
}

/** Translations of the name of a Country */
export type CountryName = {
  __typename?: 'CountryName';
  /** three-letter ISO 639-3 language code */
  code: Scalars['String'];
  /** Official name of country in this language */
  official: Scalars['String'];
  /** Commonly used name of country in this language */
  common: Scalars['String'];
  /** Is this name native or translated */
  type: CountryNameType;
};

/** Is this name native or translated */
export enum CountryNameType {
  Native = 'NATIVE',
  Translated = 'TRANSLATED'
}

/** Currency */
export type Currency = {
  __typename?: 'Currency';
  /** ISO 4127 Currency code */
  code: Scalars['String'];
  /** Name of the currency */
  name: Scalars['String'];
  /** Symbol of the currency */
  symbol: Scalars['String'];
};

export enum Region {
  Africa = 'AFRICA',
  Americas = 'AMERICAS',
  Antartic = 'ANTARTIC',
  Asia = 'ASIA',
  Europe = 'EUROPE',
  Oceania = 'OCEANIA'
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Fetch information about Countries */
  countries: Array<Country>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Country: ResolverTypeWrapper<Country>;
  ISO3166Status: Iso3166Status;
  CountryName: ResolverTypeWrapper<CountryName>;
  CountryNameType: CountryNameType;
  Currency: ResolverTypeWrapper<Currency>;
  Region: Region;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Country: Country;
  ISO3166Status: Iso3166Status;
  CountryName: CountryName;
  CountryNameType: CountryNameType;
  Currency: Currency;
  Region: Region;
  Query: {};
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  officialName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names: Resolver<Array<ResolversTypes['CountryName']>, ParentType, ContextType>;
  tld: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  cca2: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ccn3: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cca3: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cioc: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  independent: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status: Resolver<ResolversTypes['ISO3166Status'], ParentType, ContextType>;
  currencies: Resolver<Array<ResolversTypes['Currency']>, ParentType, ContextType>;
  capitalCities: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  altSpellings: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  region: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  subregion: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emoji: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CountryNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryName'] = ResolversParentTypes['CountryName']> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  official: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  common: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type: Resolver<ResolversTypes['CountryNameType'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  code: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  countries: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Country: CountryResolvers<ContextType>;
  CountryName: CountryNameResolvers<ContextType>;
  Currency: CurrencyResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
