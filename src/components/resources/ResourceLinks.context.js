import React, { useContext } from 'react';
import PropTypes, { func } from 'prop-types';

import { useResources } from '..';

export const ResourcesContext = React.createContext({});

export function ResourceLinksContextProvider({
  resources,
  resourceLinks,
  reference,
  config,
  onResources,
  children,
}) {
  const val = useResources({
    resources: resources,
    resourceLinks: resourceLinks,
    reference: reference,
    config: config,
    onResources: onResources,
  });

  return (
    <ResourceLinksContext.Provider value={val}>
      {children}
    </ResourceLinksContext.Provider>
  );
}

ResourceLinksContextProvider.propTypes = {
  /** the resources  */
  resources: PropTypes.arrayOf(PropTypes.object),
  /** references: chapter and verse */
  reference: PropTypes.object,
  /** The link to parse and fetch the resource manifest */
  resourceLinks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  /** The configuration of the server, and fetching */
  config: PropTypes.shape({
    server: PropTypes.string.isRequired,
    /** the overriding cache settings */
    cache: PropTypes.shape({
      /** cache age in ms */
      maxAge: PropTypes.number,
    }),
  }),
  /** action taken after a resource is acquired */
  onResources: PropTypes.func.isRequired,
};

export default ResourceLinksContextProvider;
